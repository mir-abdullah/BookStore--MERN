import express, { Router } from 'express'
import {Book} from '../models/bookModel.js'


const router =express.Router();
//route for save a new book
router.post('/' , async (req,res)=>{
    try{
        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send('Please fill all the fields')

        }
        const newBook ={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book)

    }catch(error){
        return res.status(500).send(error.message)
    }

})

//route to get all the books

router.get('/' ,async (req,res)=>{
    try{
        const books =await Book.find({})
        return res.status(200).json({
            count:books.length,
            data:books
        })
    }catch(error){
        console.log(error.message)
        res.status(500).send("Errror loading the books")
    }

})

//route to get a single book

router.get('/:id' ,async (req,res)=>{
    try{
        const {id} = req.params;
        const book =await Book.findById(id)
        return res.status(200).json(book)
    }catch(error){
        console.log(error.message)
        res.status(500).send("Errror loading the book")
    }

})

//route to update a book by id

router.put('/:id',async(req,res)=>{
    try{
            if(!req.body.title ||
                !req.body.author ||
                !req.body.publishYear
            ){
                return res.status(400).send('Please fill all the fields')
            }

            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id,req.body)
            if(!result){
                return res.status(404).send({message:"book not found"})
            }
            return res.status(200).send({message:"book updated successfully"})

    }catch(error){
        res.status(500).send(error.message)

    }

    
})

//route to delete a book 
router.delete('/:id',async (req,res)=>{
    try{

        const {id} = req.params;
        const result =await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(404).send("Book not Found")
        }
        return res.status(200).send("Book Deleted Successfully")

    }catch(error){
        res.status(500).send(error.message)
    }
})

export default router;