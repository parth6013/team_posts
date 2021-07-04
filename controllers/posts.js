import PostMessage from '../models/postMessage.js';

export const getPosts= async (req,res) =>{


    console.log("yes");
    try{
           const postMessages = await PostMessage.find(); 

           res.status(200).json(postMessages);
           
    }catch(error){
        res.status(404).json({message: error.message});
    }

}




export const createPost = async (req,res)=>{
    
    const post = req.body;

    const newPost = new PostMessage(post);
    
    try{
           await newPost.save(); 

           res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({message:error.message});
    }
}


export const findMessage= async (req, res) => {

    try {
        const data1= await PostMessage.find({ teamname: req.body.teamname})

        console.log("trying");
        

        res.send({ data1})
    } catch (e) {
        res.status(400).send()
    }
}


