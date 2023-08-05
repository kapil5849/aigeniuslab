import React from 'react'
import '../styles/categories.css'
import CategoriesCard from '../components/CategoriesCard'
import img from '../assets/aitool.svg';

const Categories = () => {
    return (
        <div className='main-categories'>
            <div className='cate-head'>
                <h1>Categories</h1>
            </div>
            <div className='cate-card'>
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Students"
                    description="Empower students with AI tools for educational purposes, including study aids, language learning, and AI-based tutoring."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Teachers"
                    description="Provide AI tools for teachers to enhance classroom experiences, create interactive lessons, and track student progress."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Software Engineers"
                    description="Support software engineers with AI tools for automated testing, code analysis, and intelligent code completion."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Healthcare"
                    description="Explore AI tools designed for healthcare professionals, including medical image analysis and patient diagnosis support."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Finance"
                    description="Discover AI tools tailored for the finance industry, such as fraud detection, risk assessment, and automated trading."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Marketing"
                    description="Utilize AI tools for marketing strategies, including customer segmentation, personalized recommendations, and sentiment analysis."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Creative Arts"
                    description="Unleash creativity with AI tools for artists, designers, and musicians, including generative art and AI-driven music composition."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for E-commerce"
                    description="Enhance e-commerce experiences with AI tools for product recommendations, chatbots, and personalized shopping."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Natural Resources"
                    description="Use AI tools to optimize resource management, monitor environmental impact, and enable sustainable practices."
                />
                <CategoriesCard
                    imageSrc={img}
                    heading="AI for Social Good"
                    description="Engage in AI projects with a positive social impact, such as disaster response, poverty alleviation, and healthcare accessibility."
                />
            </div>
        </div>
    )
}

export default Categories;
