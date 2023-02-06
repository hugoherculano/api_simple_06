"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCoursesService_1 = __importDefault(require("./CreateCoursesService"));
const createCourseService = new CreateCoursesService_1.default();
function createCourse(request, response) {
    createCourseService.execute('NodeJS', 10, 'Dani');
    return response.send();
}
exports.default = createCourse;
