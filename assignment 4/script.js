var names=new Array();
names[0]="Yaakov";
names[1]="Jimin";
names[2]="Jen";
names[3]="john";
names[4]="harry";
names[5]="ron";
names[6]="paul";
names[7]="george";
names[8]="michel";
names[9]="jason";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
	}
	else{
	    console.log("Hello "+ names[i])
    }
}    