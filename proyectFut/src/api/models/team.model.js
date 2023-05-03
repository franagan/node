const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;

const teamSchema = new Schema(
    {
        name: { type: String, required: true },
        liga: { type: String, required: true },
        pais: { type: String, required: true },
        ciudad: { type: String, required: true },
        estadio: { type: String, required: true },
        aforo: { type: String, required: true },
    },
    {
        timestamps: true,
    },
    {
        collection: 'team',
    }
);

const Team = mongoose.model('team, teamSchema');
module.exports = Team;
