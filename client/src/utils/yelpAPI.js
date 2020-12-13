import axios from "axios";

// set the api key as a request header with axios (google "set request header axios")
// "id": downtown "uK3hclf6oje7rRAbUhPCLg",
const BASEURL = "https://api.yelp.com/v3/businesses/uK3hclf6oje7rRAbUhPCLg/reviews";
const APIKEY = "I2SLuyyKWHvDg8heVcUEXkrNxuWiWE-1Qe2SEVE2bGwJ-yk4bNbUoo4_30UN0cPCLAL5csPI17_pUKwgJiqFn4EHzK2KakXxtiLb5Q6BXoM990rSIziXHBLRWEKgX3Yx";

const search = async () => {
  return axios
  .get(
      BASEURL,
      {
        headers: {
            Authorization: `Bearer ${APIKEY}`,
        },
      }
  )
}

export { search }
