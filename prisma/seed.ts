import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
    {
        id: '1',
        name: '經典紅玫瑰花束',
        description: '象徵熱情、浪漫與愛，適合用於情人節、紀念日、求婚等場合。',
        price: 1200,
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        id: '2',
        name: '清新向日葵花籃',
        description: '代表陽光、開朗與忠誠，適合畢業典禮、開幕誌慶或給朋友打氣。',
        price: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1597848212624-e6ec2d17524e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        id: '3',
        name: '優雅百合花瓶',
        description: '純潔、高雅的象徵，常用於婚禮、探病或表達敬意。',
        price: 1800,
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        id: '4',
        name: '浪漫鬱金香花盒',
        description: '愛的告白、永恆的祝福，適合送給戀人或摯友。',
        price: 2200,
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        id: '5',
        name: '溫馨康乃馨花束',
        description: '代表母愛、溫情與祝福，是母親節或感謝長輩的首選。',
        price: 1600,
        imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });