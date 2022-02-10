import table from "../../airtable/airtable";

const fetchProjectsFromAirtable = async (req, res) => {
  if ((req.method = "GET")) {
    try {
      let projects = [];
      const response = await table
        .select()
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            projects.push(record.fields);
          });
          fetchNextPage();
        });
      res.json(projects);
      res.status(200);
    } catch (e) {
      res.status(500);
      res.json({ message: "there was an error retrieving the records", e });
    }
  }
};

export default fetchProjectsFromAirtable;
