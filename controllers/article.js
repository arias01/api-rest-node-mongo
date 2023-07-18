const validator = require("validator");
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
    let parameters = req.body;
    //validate data
    try{
        let validate_title = !validator.isEmpty(parameters.title) && validator.isLength(parameters.title,{min:5, max:50});
        let validate_content= !validator.isEmpty(parameters.content);

     if(validate_title &&  !validate_content){
        throw new Error("Validation Error");
     }


    }catch(e){

        return res.status(400).json({
            status: "Error",
            content: "No valid data",
            other: e.message
        });
    }

    //create object

    //assign values to the object model

    //save the article to the database 

    //return the result
    return res.status(200).json({
        state: "Ok",
        parameters
    })
}


module.exports={
    test,
    allArticles,
    saveArticle
}