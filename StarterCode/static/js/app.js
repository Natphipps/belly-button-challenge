//use d3 to read in samples.json
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
function init() {

//fetch json data
d3.json(url).then(function(data) {
  console.log(data);

  // select dropdown menu
  let dropdownMenu = d3.select('#selDataset');

  //iterate through names data and append to dropdown
  d3.json(url).then((data) => {
    //create an variable for the names data
    let names = data.names;
    names.forEach((names) => {
      dropdownMenu.append('option')
      .text(names)
      .property("values", names);
    });
  

  let samplevalues = data.samples[0].sample_values.slice(0,10);
  console.log(samplevalues)
  let labels = data.samples[0].otu_labels.slice(0,10);
  console.log(labels)
  let top_otus = data.samples[0].otu_ids.slice(0,10).reverse();
  console.log(top_otus)


    let trace1 = {
      x:samplevalues,
      y:top_otus,
      text:labels,
      orientation: 'h',
      type: 'bar'};

    let layout = {
    title: "Top 10 OTUs Present"};
    let bardata = [trace1];

    Plotly.newPlot("bar", bardata, layout);

  });

  });
  };

init ();