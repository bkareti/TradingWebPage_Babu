#!/usr/bin/env python3
"""
Generate placeholder images for the Livelong Wealth website.
This script creates PNG images that match the reference website structure.
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Pillow not installed. Install with: pip install Pillow")
    exit(1)

import os

# Create images directory if it doesn't exist
output_dir = "public/images"
os.makedirs(output_dir, exist_ok=True)


def create_placeholder(filename, width, height, text="", bg_color=(59, 130, 246), text_color=(255, 255, 255)):
    """Create a placeholder image."""
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)

    if text:
        # Calculate text position
        bbox = draw.textbbox((0, 0), text)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (width - text_width) // 2
        y = (height - text_height) // 2
        draw.text((x, y), text, fill=text_color)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    print(f"✓ Created: {filepath}")


# Logo
create_placeholder("logo.png", 228, 60, "LIVELONG\nWEALTH",
                   bg_color=(30, 64, 175), text_color=(255, 255, 255))

# Hero Images
create_placeholder("homepage-hero-pic.png", 1000, 400,
                   "Stock Market\nTrading & Wealth", bg_color=(59, 130, 246))
create_placeholder("responsive-mobile.png", 800, 400,
                   "Mobile View", bg_color=(59, 130, 246))

# Service Images
create_placeholder("Courses.png", 300, 250,
                   "📚 Courses", bg_color=(251, 191, 36))
create_placeholder("Workshops.png", 300, 250,
                   "🎓 Workshops", bg_color=(16, 185, 129))
create_placeholder("WealthManagement.png", 300, 250,
                   "💼 Wealth\nManagement", bg_color=(139, 92, 246))

# Feature Images
create_placeholder("Strategies.png", 250, 200,
                   "📊 Strategies", bg_color=(249, 115, 22))
create_placeholder("RiskReward.png", 250, 200,
                   "⚖️ Risk & Reward", bg_color=(238, 92, 66))
create_placeholder("TradingConcepts.png", 250, 200,
                   "📈 Trading\nConcepts", bg_color=(96, 165, 250))
create_placeholder("LiveTrading.png", 250, 200,
                   "🎯 Live Trading", bg_color=(34, 197, 94))
create_placeholder("ExpertSupport.png", 250, 200,
                   "🤝 Expert\nSupport", bg_color=(168, 85, 247))
create_placeholder("SmartTrading.png", 250, 200,
                   "🤖 Smart\nTrading", bg_color=(59, 130, 246))

print("\n✅ All placeholder images created successfully!")
print(f"📁 Location: {output_dir}/")
