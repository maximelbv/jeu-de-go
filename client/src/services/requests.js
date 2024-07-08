import axios from "axios";

const serverUrl = 'http://localhost:8000/';


/**
 * Retrieves all problems from the database.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getAllProblems() {
    try {
      const response = await axios.get(`${serverUrl + "problems/"}`);
      return response;
    } catch (error) {
      throw error;
    }
  }