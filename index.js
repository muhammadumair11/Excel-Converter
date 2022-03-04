function normalFunction(data) {
    // var data = document.querySelector('.table');

        /* make the worksheet */
        var ws = XLSX.utils.json_to_sheet(data);

        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "sheetData");

        /* generate an XLSX file */
        XLSX.writeFile(wb, "sheetjs.xlsx");

}


Vue.createApp({
    data() {
      return {
        head: ["SI_NO",
            "Name",
            "Mobile",
            "Email",
            "State",
            "Place",
            "Details",
            "Current_CTC",
            "Expected_CTC",
            "Comments",
            "Remarks",],
        formData: {
            SI_NO: null,
            Name: "",
            Mobile: "",
            Email: "",
            State: "",
            Place: "",
            Details: "",
            Current_CTC: "",
            Expected_CTC: "",
            Comments: "",
            Remarks: "",
        },
        jsonData :  [{}, {
            SI_NO: 1,
            Name: "fjaksdl",
            Mobile: "fjask",
            Email: "fjsdk",
            State: "fjdkals",
            Place: "fjdklas",
            Details: "fjdkasl",
            Current_CTC: "fdjaskl",
            Expected_CTC: "fdjsakl",
            Comments: "fdjlkas",
            Remarks: "fjdksal",
        }, {
            SI_NO: 2,
            Name: "fjaksdl",
            Mobile: "fjask",
            Email: "fjsdk",
            State: "fjdkals",
            Place: "fjdklas",
            Details: "fjdkasl",
            Current_CTC: "fdjaskl",
            Expected_CTC: "fdjsakl",
            Comments: "fdjlkas",
            Remarks: "fjdksal",
        }, {
            SI_NO: 3,
            Name: "fjaslkjfdklasjfdklsaj",
            Mobile: "fjask",
            Email: "fjsdk",
            State: "fjdkals",
            Place: "fjdklas",
            Details: "fjdkasl",
            Current_CTC: "fdjaskl",
            Expected_CTC: "fdjsakl",
            Comments: "fdjlkas",
            Remarks: "fjdksal",
        },]
      }
    },

    methods: {
        addDataTable () {
            if(this.jsonData.length == 0) {
                this.formData.Index = 1
            } else {
                this.formData.SI_NO = this.jsonData[this.jsonData.length - 1]["SI_NO"] + 1;
            }
            const obj = JSON.parse(JSON.stringify(this.formData))
            this.jsonData.push(obj)
            this.emptyFormState();
        },

        deleteTableRow (index) {
            this.jsonData.forEach((item, i) => {
                if(index == item.SI_NO) {
                    this.jsonData.splice(i, 1)
                }
            });
            this.jsonData.forEach((item, i) => {
                this.jsonData[i].SI_NO = i
            })

        },

        validateInputs() {
            for (const [key, value] of Object.entries(this.formData)) {
                if (key == "SI_NO") {
                    continue;
                } else if (this.formData[key] == "") {
                    return true;
                } else {
                    return false;
                }
            }
        },

        emptyFormState () {
            this.formData.SI_NO = null;
            this.formData.Name = "";
            this.formData.Mobile = "";
            this.formData.Email = "";
            this.formData.State = "";
            this.formData.Place = "";
            this.formData.Details = "";
            this.formData.Current_CTC = "";
            this.formData.Expected_CTC = "";
            this.formData.Comments = "";
            this.formData.Remarks = "";
        },

        downloadExcel () {
            normalFunction(this.jsonData)
        }


    },

    updated() {
        this.validateInputs();
    },

    created() {
        this.validateInputs();
    }

    
  }).mount('#app')