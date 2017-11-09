const express = require('express')
const model = require('../models/answers')
const tools = require('../helper/tools')
class Answers {
    static get_all(req,res) {
        model.find().populate('question').populate('vote').populate('user')
        .exec((err,rows) => {
            res.send(rows)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static get_by(req,res) {
        model.find({question:req.params.id}).populate('question').populate('vote').populate('user')
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
        })
        .then(row => {
            res.send(row)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static create(req,res) {
        model.create({
            answer: req.body.answer,
            question: req.body.question,
            like: req.body.like,
            unlike: req.body.unlike,
            date: req.body.date,
            user: req.body.user
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static like(req,res) {
        model.updateOne({
            _id: req.params.id
        },
        {
            $set: {
                "like": req.body.like
            }
        })
        .then(result => {
            res.send(req.body.like)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static unlike(req,res) {
        model.updateOne({
            _id: req.params.id
        },
        {
            $set: {
                "unlike": req.body.unlike                
            }
        })
        .then(result => {
            res.send(req.body.unlike)
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
module.exports = Answers