import { jsontoexcel } from "vue-table-to-excel";

Vue.createApp({
    data() {
      return {
        head: ["Index","First-Name", "Last-Name", "Father-Name", "Other-Name", "State"],
        formData: {
            "Index": null,
            "First-Name" : "",
            "Last-Name":  "",
            "Father-Name": "",
            "Other-Name": "",
            "State": ""
        },
        jsonData :  [{
            "Index": 1,
            "First-Name" : "Muhammad",
            "Last-Name":  "Umair",
            "Father-Name": "Something",
            "Other-Name": "Something as well",
            "State": "Kerela"
        },{
            "Index": 2,
            "First-Name" : "Muhammad",
            "Last-Name":  "Umair",
            "Father-Name": "Something",
            "Other-Name": "Something as well",
            "State": "Kerela"
        },{
            "Index": 3,
            "First-Name" : "Muhammad",
            "Last-Name":  "Umair",
            "Father-Name": "Something",
            "Other-Name": "Something as well",
            "State": "Kerela"
        }]
      }
    },

    methods: {
        addDataTable () {
            this.formData.Index = this.jsonData[this.jsonData.length - 1]["Index"] + 1;
            const obj = JSON.parse(JSON.stringify(this.formData))
            this.jsonData.push(obj)
            this.emptyFormState();
        },

        deleteTableRow (index) {
            this.jsonData.forEach((item, i) => {
                if(index == item.Index) {
                    this.jsonData.splice(i, 1)
                }
            });
            this.jsonData.forEach((item, i) => {
                this.jsonData[i].Index = i + 1
            })

        },

        validateInputs() {
            for (const [key, value] of Object.entries(this.formData)) {
                if (key == "Index") {
                    continue;
                } else if (this.formData[key] == "") {
                    return true;
                } else {
                    return false;
                }
            }
        },

        emptyFormState () {
            this.formData["Index"] = null,
            this.formData["First-Name"]  = "",
            this.formData["Last-Name"] =  "",
            this.formData["Father-Name"] = "",
            this.formData["Other-Name"] = "",
            this.formData["State"] = "0"
        },

        downloadExcel () {
            jsontoexcel.getXlsx(this.jsonData, this.head, "excel.xlsx");
        }


    },

    updated() {
        this.validateInputs();
    },

    created() {
        this.validateInputs();
    }

    
  }).mount('#app')