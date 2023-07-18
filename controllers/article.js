const test = (req, res) => {

    return res.status(200).json({
        message: "This is a test on Article Controller"
    });
}


const allArticles = (req,res)=>{

    return res.status(200).json([{
        name: "Banana",
        price: 52.36
    },
    {
        name: "Pencil",
        price: 14.36
    }]);

}

const saveArticle = (req,res)=>{
    //get the parameters from post to save

    //validate data

    //create object

    //assign values to the object model

    //save the article to the database 

    //return the result
    return res.status(200).json({
        state: "Ok"
    })
}


module.exports={
    test,
    allArticles,
    saveArticle
}