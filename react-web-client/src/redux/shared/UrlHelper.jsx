export let combineUrl = (baseHost, resource) => {
    let result = addTrailingSlash(baseHost);
    result = result + removeLeadingSlash(resource);
    return result;
}
export let removeLeadingSlash = (url) => {
    if (url.startsWith('/')) {
        url = url.substr(1);
    }
    return url;
}
export let removeTrailingSlash = (value) => {
    if (value.endsWith('/')) {
        return value.substr(0, value.length - 1);
    }
    else {
        return value;
    }
}
export let addTrailingSlash = (value) => {
    if (!value.endsWith('/')) {
        return value + '/';
    }
    else {
        return value;
    }
}