import axios from "axios";

const BASE_URL: string = process.env.REACT_APP_BASE_URL || "http://localhost:5000/";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export interface EventData {
  id?: string ;
  date: number;
  title: string;
  description: string;
}

interface CallData {
  url: string;
  method: any;
  data: any;
}

class CalendarApi {

  static async request(method: string= "get", data = {}) {
    console.debug("API Call:", {data}, {method});


    try {
        const callData: CallData = { url: BASE_URL, method, data}
        return (await axios(callData));

    } catch (err: any) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  // Individual API routes

  /** Get all events. */

  static async getEvents() {
    let res = await this.request();
    return res.data;
  }

  /** Add event to db */

  static async addEvent(data: EventData) {
    await this.request("post", data);
  }

  /** Delete event from db */

  static async deleteEvent(id: string) {
    await this.request("delete", {id});
  }
}

export default CalendarApi;
