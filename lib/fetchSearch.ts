import {Result} from "@/typings/searchTypings";

function fetchSearch(searchTerm: string) {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);

    const body = {
        source: "universal",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true,
    };

    const response = fetch("https://realtime.oxylabs.io/v1/queries", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.results.length === 0) return;
            const result: Result = data.results[0];

            return result;
        })
        .catch((e) => {
            console.error(e);
        });

    return response;
}

export default fetchSearch;