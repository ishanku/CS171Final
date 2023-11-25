d3.selectAll("button")
    //.attr("onclick", getContent(this.id))
    .on("click", function (d){
        getContent(d.delegateTarget.id)
    })

async function getContent(id) {

    try {

        d3.selectAll("#include-content").remove();

        let selectedDiv = id.toString().split("-")[0]

        let htmlFile = "html/" + selectedDiv + "-carousel.html"

        let setContent = await fetch(htmlFile);

        if (setContent.ok){
            let htmlContent = await setContent.text();

            return d3.select("#" + selectedDiv).append("div")
                .attr("id", "include-content")
                .html(htmlContent);
        }

        else {

            return d3.select("#" + selectedDiv).append("div")
                    .attr("id", "include-content")
                .html(htmlFile + " Not Found; Status: " + setContent.status);
        }


    }
    catch(error){

        console.log(error)

    }
}