'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-background">
      <h1 className="text-3xl font-bold mb-4">Welcome to Low Perry Community Hub</h1>
      <p className="text-lg mb-8">
        Learn, build, and collaborate on ally projects. Join our community of innovators and problem-solvers.
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="/learn" className="btn">
          Start Learning
        </Link>
        <Link href="/projects" className="btn">
          Explore Projects
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc mb-8">
        <li>Comprehensive Courses: Learn from structured, in-depth courses on various ally projects.</li>
        <li>Community Collaboration: Connect with like-minded individuals and work on projects together.</li>
        <li>Hands-on Projects: Apply your knowledge by working on real-world ally projects.</li>
        <li>Innovative Ideas: Explore new concepts and contribute your own ideas to the community.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Community Voices</h2>
      <blockquote className="mb-4">
        "The Low Perry Community Hub has been an incredible resource for learning and collaborating on ally projects. It's opened up a whole new world of possibilities for me."
        <footer className="mt-2">— Sarah Johnson, Web Developer</footer>
      </blockquote>
      <blockquote className="mb-4">
        "I've learned so much from the courses and community here. The old school approach combined with modern technology is refreshing and effective."
        <footer className="mt-2">— Michael Chen, UX Designer</footer>
      </blockquote>
      <blockquote className="mb-4">
        "The projects I've worked on through Low Perry Community Hub have not only improved my skills but also made a real difference in people's lives. It's been incredibly rewarding."
        <footer className="mt-2">— Emily Rodriguez, Software Engineer</footer>
      </blockquote>
      <h2 className="text-2xl font-semibold mb-4">Our Courses</h2>
      <ul className="list-disc mb-8">
        <li>Intro to Ally Projects: Learn the basics of ally projects and how they can make a difference. <Link href="/courses/intro" className="font-semibold">Enroll Now</Link></li>
        <li>Collaborative Coding: Master the art of coding collaboratively on community projects. <Link href="/courses/collaborative" className="font-semibold">Enroll Now</Link></li>
        <li>Advanced Project Building: Take your skills to the next level with advanced project techniques. <Link href="/courses/advanced" className="font-semibold">Enroll Now</Link></li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Ready to Join Our Community?</h2>
      <p className="mb-4">Start your journey of learning, building, and making a difference with ally projects today.</p>
      <div className="flex gap-4">
        <Link href="/join" className="btn">Join Now</Link>
        <Link href="/learn-more" className="btn">Learn More</Link>
      </div>
      <footer className="mt-8">
        <h3 className="text-lg font-semibold">Learn</h3>
        <ul className="list-disc">
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/tutorials">Tutorials</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/forums">Forums</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/showcase">Showcase</Link></li>
          <li><Link href="/contribute">Contribute</Link></li>
          <li><Link href="/ideas">Ideas</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/mission">Our Mission</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </footer>
    </div>
  );
}
