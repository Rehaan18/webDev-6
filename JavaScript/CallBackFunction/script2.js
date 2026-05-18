function getdata(value,nextData) {
    setTimeout( () => {
        console.log("getting data", value); 
        if (nextData) {
            nextData();
        }
    } ,3000);
}

getdata(1,()=> {
    getdata(2,()=> {
         getdata(3,()=> {
             getdata(4,()=> {
    });
});
    });
});