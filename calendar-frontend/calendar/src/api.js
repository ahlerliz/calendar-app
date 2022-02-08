import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class CalendarApi {


  static async request(method = "get", data = {}) {
    console.debug("API Call:", {data}, {method});

    // const headers = (method === "post")
    //     ? { "Content-Type": "multipart/form-data" }
    //     : {};

    const params = (method === "get")
      ? data
      : {};

    try {
        console.log("trying post")
        return (await axios({ url: BASE_URL, method, data, params }));

    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  static async getEvents() {
    let res = await this.request();
    return res.events;
  }

  static async addEvent(data) {
    await this.request("post", data);
  }


  static async deleteEvent(event_id) {
    await this.request("delete", event_id);
  }
}

export default CalendarApi;