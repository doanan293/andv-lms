"use server"

import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";

export async function enrollInCourseAction(courseId: string): Promise<ApiResponse> {
    try {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
            },
            select: {
                id: true,
                title: true,
                price: true,
                slug: true,
            }
        })

        if (!course) {
            return {
                status: "error",
                message: "Course not found"
            }
        }
    } catch {
        return {
            status: "error",
            message: "Failed to enroll in course"
        }
    }
}