const indexFile = "http://sdwebau.shopainternal.com.s3-website-ap-southeast-2.amazonaws.com/json/aaa_productlist.json";
const rooturl = "http://sdwebau.shopainternal.com.s3-website-ap-southeast-2.amazonaws.com/json/";

const fetchWithTimeout = (url, timeout = 10000) => new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => reject(new Error("Connection timeout")), timeout);
  fetch(url).then(response => {
    clearTimeout(timeoutId);
    resolve(response);
  }).catch(error => {
    clearTimeout(timeoutId);
    reject(error);
  });
});

const fetchWithRetry = (url, retries = 3, timeout = 10000) => {
  const retryFetch = (remainingRetries) => fetchWithTimeout(url, timeout).catch(error => {
    console.error(`Fetch attempt failed. Retries remaining: ${remainingRetries}`);
    return remainingRetries > 0 ? retryFetch(remainingRetries - 1) : Promise.reject(error);
  });

  return retryFetch(retries);
};

fetch(indexFile)
  .then(response => response.json())
  .then(data => {
    if (data && Array.isArray(data)) {
      data.forEach(item => {
        if (item.ProductName) {
          const productNameUrl = `${rooturl}${item.ProductName}.json`;
          fetchWithRetry(productNameUrl)
            .then(response => response.json())
            .then(parsedProductName => {
              console.log("Parsed ProductName JSON data:", parsedProductName);
            })
            .catch(error => {
              console.error("Error fetching or parsing ProductName JSON data:", error);
            });
        } else {
          console.error("ProductName property not found in the item:", item);
        }
      });
    } else {
      console.error("Invalid data format or ProductName property not found in the fetched data.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
