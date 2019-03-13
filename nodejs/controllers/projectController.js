'use strict'

var Project = require('../models/project');
const fs = require('fs');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de project'
        });
    },

    saveProject: function (req, res) {
        var result;
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) {
                result = res.status(500).send({
                    message: "Error al guardar el documento."
                });
            } else if (!projectStored) {
                result = res.status(404).send({
                    message: "No se ha podido guardar el project."
                });
            } else {
                result = res.status(200).send({
                    project: projectStored
                });
            }
            return result;
        });
    },

    getProject: function (req, res) {
        var projectId = req.params.id;
        var result;

        if (projectId == null) {
            result = res.status(404).send({
                message: "El id no existe"
            });
        } else {
            Project.findById(projectId, (err, project) => {
                if (err) {
                    result = res.status(500).send({
                        message: "Error al devolver los datos"
                    });
                } else if (!project) {
                    result = res.status(404).send({
                        message: "El proyecto no existe"
                    });
                } else {
                    result = res.status(200).send({
                        project
                    });
                }
            });
        }
        return result;
    },

    getProjects: function (req, res) {
        var result;

        // where year = 2019 y ordena por año .sort('-year') ordenación inversa
        // Project.find({year:2019}).sort('year').exec(err, project) => {
        Project.find({}).exec((err, projects) => {
            if (err) {
                result = res.status(500).send({
                    message: "Error al devolver los datos"
                });
            } else if (!projects) {
                result = res.status(404).send({
                    message: "No hay proyectos que mostrar"
                });
            } else {
                result = res.status(200).send({
                    projects
                });
            }
        });
        return result;
    },

    updateProject: function (req, res) {
        var result;
        var projectId = req.params.id;
        var updateProject = req.body;

        if (projectId == null) {
            result = res.status(404).send({
                message: "El id no existe"
            });
        } else {
            // {new:true} -> Es para que devuelva el objeto modificado, no el que no ha sido modif
            Project.findByIdAndUpdate(projectId, updateProject, {
                new: true
            }, (err, projectUpdated) => {
                if (err) {
                    result = res.status(500).send({
                        message: "Error al actualizar"
                    });
                } else if (!projectUpdated) {
                    result = res.status(404).send({
                        message: "No existe el proyecto para actualizar o no se puede actualizar"
                    });
                } else {
                    result = res.status(200).send({
                        project: projectUpdated
                    });
                }
            });
        }
        return result;
    },

    deleteProject: function (req, res) {
        var result;
        var projectId = req.params.id;

        if (projectId == null) {
            result = res.status(404).send({
                message: "El id no existe"
            });
        } else {
            Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
                if (err) {
                    result = res.status(500).send({
                        message: "No se ha podido borrar el proyecto"
                    });
                } else if (!projectRemoved) {
                    result = res.status(404).send({
                        message: "No se puede eliminar ese proyecto"
                    });
                } else {
                    result = res.status(200).send({
                        project: projectRemoved
                    });
                }
            });
        }
        return result;
    },

    uploadImage: function (req, res) {
        var result;
        var projectId = req.params.id;
        var filename = 'Imagen no subida';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('/');
            filename = fileSplit[1];

            // Comprobar extension
            var extension = filename.split(".")[1];

            if(extension == 'png' || extension == 'jpeg' || extension == 'jpg'|| extension == 'git'){
                Project.findOneAndUpdate(projectId, {
                    image: filename
                }, {
                    new: true
                }, (err, projectUpdated) => {
                    if (err) {
                        result = res.status(500).send({
                            message: "No se ha podido subir la imagen al proyecto"
                        });
                    } else if (!projectUpdated) {
                        result = res.status(404).send({
                            message: "El proyecto no existe"
                        });
                    } else {
                        result = res.status(200).send({
                            project: projectUpdated
                        });
                    }
                });
            } else {
                fs.unlink(filePath, (err)=>{
                    result = res.status(200).send({
                        message: "La extensión no es válida"
                    });
                });
            }

        } else {
            result = res.status(200).send({
                message: filename
            })
        }
        return result;
    },


};


module.exports = controller;