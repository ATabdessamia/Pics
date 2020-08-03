import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 9PZkXmXDX78YuaHkMb21q7JnmiFVgGGGgO0NctNDZ1Y",
  },
});
