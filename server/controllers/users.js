const express = require('express')
const model = require('../models/users')
const tools = require('../helper/tools')
class Users {
    static get_all(req,res) {
        model.find()
        .then(rows => {
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
            console.log("ERROR")
            res.send(row)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static create(req,res) {
        let salt = tools.getRand()
        let password = tools.getCrypt(req.body.password,salt)
        model.create({
            username: req.body.username,
            password: password,
            salt: salt,
            role: req.body.role
        })
        .then(response => {
            let result = {
                _id: response._id,
                username: req.body.username,
                password: password,
                salt: salt,
                role: req.body.role
            }
            res.send(result)
        })
        .catch(err => {
            res.send(tools.getErrors(err))
        })
    }
    static update(req,res) {
        let salt = tools.getRand()
        let password = tools.getCrypt(req.body.password,salt)
        model.update({
            _id: req.params.id
        },{
            
            username: req.body.username,
            password: req.body.password,
            salt: req.body.salt,
            role: req.body.role
        })
        .then(response => {
            let result = {
                "_id":req.params.id,
                "username": req.body.username,
                "password": req.body.password,
                "salt": req.body.salt,
                "role": req.body.role
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
module.exports = Users