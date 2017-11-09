const express = require('express')
const model = require('../models/questions')
const tools = require('../helper/tools')
class Questions {
    static get_all(req,res) {
        model.find().populate('user')
        .exec((err,rows) => {
            res.send(rows)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static get_by_id(req,res) {
        model.findOne({
            _id: req.params.id
        }).populate('user')
        .exec((err,row) => {
            res.send(row)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static create(req,res) {
        model.create({
            title: req.body.title,
            question: req.body.question,
            user: req.body.user,
            date: req.body.date
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static update(req,res) {
        model.update({
            _id: req.params.id
        },{
            title:req.body.title,
            question: req.body.question,
            author: req.body.author,
            date: req.body.date
        })
        .then(response => {
            let result = {
                "_id":req.params.id,
                "title":req.title,
                "question": req.body.question,
                "author": req.body.author,
                "date": req.body.date
            }
            res.send(result)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static delete(req,res) {
        model.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
}
module.exports = Questions