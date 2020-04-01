app.get('/helsinki-events-selected', function (req, res) {
    http.get('http://open-api.myhelsinki.fi/v1/activities/', function (resp) {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', function (chunk) {
            data += chunk;
        });

        var info_url = data.info_url;

        // The whole response has been received. Print out the result.
        resp.on('end', function () {
            data = JSON.parse(data);

            for (var i = 0, length = data.length; i < length; i++) {
                res.send(info_url)
            }

            res.send(info_url)
            res.send(data);
            res.end();

        });

    }).on("error", function (err) {
        console.log("Error: " + err.message);
        res.end();
    });
});
