
import Books from "../model/books.js";


/*
  |----------------------------------------------------------------------------------------------------------------
  | API Books create add
  |----------------------------------------------------------------------------------------------------------------
*/
export const create_Books = async (req, res) => {

try {

    var result = await Books.create({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
    })
    return   res.status(200).json({ message: 'Books added successfully', data: result });

} catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Database error', message: error.message });
}
}


/*
  |----------------------------------------------------------------------------------------------------------------
  | API book get all 
  |----------------------------------------------------------------------------------------------------------------
*/
export const list_Books = async (req, res) => {
  
try {
        let result = await Books.find()
        return   res.status(200).json({ message: 'Books get all successfully', data: result })
} catch (error) {
    console.log(error);
    return  res.status(500).send('Error Occur')
}
}

/*
  |----------------------------------------------------------------------------------------------------------------
  | API Books get by id 
  |----------------------------------------------------------------------------------------------------------------
*/
export const getbyid_Books = async (req, res) => {

try { 
        let BookID=  req.body.BookID   
    let result = await Books.findOne({_id:BookID} )

    return   res.status(200).json({ message: 'Books get successfully', data: result })

} catch (error) {
    console.log(error);
    return  res.status(500).send('Error Occur')
}
}

/*
  |----------------------------------------------------------------------------------------------------------------
  | API Books Update 
  |----------------------------------------------------------------------------------------------------------------
*/
export const Update_Books = async (req, res) => {
try {
    let BookID=  req.body.BookID   
        let result = await Books.findByIdAndUpdate({_id:BookID},{
            title:req.body.title,
            author: req.body.author,
            summary: req.body.summary
        },{new:true})
    return   res.status(200).json({ message: 'Books update successfully', data: result })

} catch (error) {
    console.log(error);
    return  res.status(500).send('Error Occur')
}
}



/*
  |----------------------------------------------------------------------------------------------------------------
  | API  delete Books  
  |----------------------------------------------------------------------------------------------------------------
*/
export const delete_Books = async (req, res) => {
    // console.log(req.body)
try {
        let BookID =  req.params.BookID   
    let result = await Books.deleteOne({_id:BookID} )
   
    return   res.status(200).json({ message: 'Books get successfully', data: result })
} catch (error) {
    console.log(error);
    return  res.status(500).send('Error Occur')
}
}