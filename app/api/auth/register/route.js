import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { UserModel, sequelize } from '@/models/index.js';
import { Op } from 'sequelize';
import { generateToken } from '@/lib/auth.js';

export async function POST(request) {
    try {
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            return NextResponse.json({ message: 'Username, email, and password are required' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({
            where: {
                [sequelize.Op.or]: [{ email }, { username }]
            }
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User with this email or username already exists' }, { status: 409 });
        }

        // Create new user
        const user = await UserModel.create({
            username,
            email,
            password,
            role: 'user' // Default role
        });

        // Generate token
        const token = generateToken(user);

        return NextResponse.json({
            message: 'Registration successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ message: 'Registration failed', error: error.message }, { status: 500 });
    }
}