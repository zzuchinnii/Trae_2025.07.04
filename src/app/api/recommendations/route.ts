import { NextResponse } from 'next/server';

// Mock data for flower recommendations
const mockRecommendations = [
  { id: 1, name: '永恆愛戀', price: 1800, image: '/placeholder.svg' },
  { id: 2, name: '陽光滿溢', price: 1500, image: '/placeholder.svg' },
  { id: 3, name: '溫柔祝福', price: 2200, image: '/placeholder.svg' },
];

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    // In a real application, you would send the answers to an AI service.
    // Here, we'll just log them and return mock data.
    console.log('Received answers for recommendation:', answers);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(mockRecommendations);
  } catch (error) {
    console.error('Recommendation API error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}