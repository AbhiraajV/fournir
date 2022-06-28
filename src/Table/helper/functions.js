export default class TableFunctions {
  constructor(data, setData) {
    this.data = data;
    this.setData = setData;
  }
  getData = () => this.data;
  getSetData = () => this.setData;
  addCol = () => {
    console.log(this.data);
    var content = this.data.content;
    for (var i in content) content[i].push("Enter Content");

    this.setData({
      ...this.data,
      headers: [...this.data["headers"], "New Header"],
      content: content,
    });
  };
  addRow = () => {
    console.log(this.data);
    var content = [];
    for (var i in this.data.headers) content.push("New Row");
    this.setData({
      ...this.data,
      content: [...this.data["content"], content],
    });
  };
  headerChangeHandler = (e, index) => {
    if (!this.setData) return;
    if (!e.currentTarget || !e.currentTarget.textContent) return;
    this.data.headers[index] = e.currentTarget.textContent;
    this.setData(this.data);
  };
  contentChangeHandler = (e, index) => {
    if (!this.setData || !e.currentTarget || !e.currentTarget.textContent)
      return;

    this.data.content[index[0]][index[1]] = e.currentTarget.textContent;
    this.setData(this.data);
  };

  exportCSV = () => {
    var temp = [this.data.headers, ...this.data.content];

    var csvRow = [];
    for (var i in temp) csvRow.push(temp[i].join(","));
    var csvString = csvRow.join("%0A");
    console.log({ csvString });
    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "fournier.csv";
    document.body.appendChild(a);
    a.click();
  };
}
