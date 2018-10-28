const urls = {
  convertObjectToFormUrlEncodedString: (obj) => {
    const formBody = [];
    for (const property in obj) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(obj[property]);
        formBody.push(`${encodedKey}=${encodedValue}`);
    }
    return formBody.join('&');
  },
};

module.exports = urls;
