import { Request, Response } from 'express';
import CreateCoursesService from './CreateCoursesService';

const createCourseService = new CreateCoursesService();

export default function createCourse(request: Request, response: Response) {
    createCourseService.execute({ name: "React", duration: 10, educator: 'Maikão' });

    return response.send();
}