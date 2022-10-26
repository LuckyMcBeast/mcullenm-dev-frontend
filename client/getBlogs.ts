import axios from "axios";
import { Blog } from "../types/blog";

const contentUrl = process.env.REACT_APP_CONTENT_MANAGER_URL;
const blogEndpoint = process.env.REACT_APP_BLOG_ENDPOINT;

async function getBlogs(): Promise<Blog[]> {
  return await axios
    .get(`${contentUrl}${blogEndpoint}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

async function getBlog(id: string): Promise<Blog | null> {
  return await axios
    .get(`${contentUrl}${blogEndpoint}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn(`Could not Find Blog with ID of ${id}`);
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export { getBlogs, getBlog };
