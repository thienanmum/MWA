const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

var find = file => {
    const findInTree = function (tree) {
        if (tree.files != null) {
            for (const index in tree.files) {
                if (tree.files[index] === file) return true;
            }
        }
        if (tree.subFolders != null) {
            for (const folder of tree.subFolders) {
                if (findInTree(folder)) return true;
            }
        }
        return false;
    }
    return findInTree;
};

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false