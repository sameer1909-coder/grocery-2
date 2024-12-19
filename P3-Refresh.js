
document.getElementById("airpods").value = getSavedValue("airpods");
document.getElementById("chuckroast").value = getSavedValue("chuckroast");
document.getElementById("croissant").value = getSavedValue("croissant");
document.getElementById("granolabar").value = getSavedValue("granolabar");
document.getElementById("lysol").value = getSavedValue("lysol");
document.getElementById("broccoli").value=getSavedValue("broccoli");


        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            sessionStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }
        function getSavedValue  (v){
            if (!sessionStorage.getItem(v)) {
                return "";// You can change this to your defualt value. 
            }
            return sessionStorage.getItem(v);
        }
