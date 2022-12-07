const Memcached = require('memcached-promise');

const getCachedData = async (key) => {  

    const host = process.env.CACHE_HOST;
    const port = process.env.CACHE_PORT;

    const memcached = new Memcached(`${host}:${port}`);
    return await memcached.get(key);
}

const setCachedData = async (key, data) => {  

    const host = process.env.CACHE_HOST;
    const port = process.env.CACHE_PORT;

    const memcached = new Memcached(`${host}:${port}`);
    return await memcached.set(key, data, 10);
}

module.exports = {
    getCachedData,
    setCachedData
};