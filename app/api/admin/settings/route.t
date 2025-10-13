import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Get settings from database
  const settings = {
    general: {
      siteName: 'Khati Bhuban',
      siteTagline: 'Pure Natural Honey & Foods',
      contactEmail: 'info@khatibhuban.com',
      contactPhone: '+8801234567890',
      timezone: 'Asia/Dhaka',
      currency: 'BDT'
    },
    store: {
      maintenanceMode: false,
      enableReviews: true,
      minOrderAmount: 0,
      taxRate: 0
    },
    shipping: {
      freeShippingEnabled: true,
      freeShippingMin: 500,
      shippingCost: 60
    },
    payments: {
      codEnabled: true,
      bkashEnabled: true,
      nagadEnabled: true
    }
  };

  return NextResponse.json(settings);
}

export async function POST(request: NextRequest) {
  try {
    const settings = await request.json();
    
    // Save settings to database
    // This is where you would integrate with your database
    
    return NextResponse.json({ 
      success: true, 
      message: 'Settings saved successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to save settings' },
      { status: 500 }
    );
  }
}