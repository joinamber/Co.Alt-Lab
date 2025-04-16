
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import { Zap, BarChart, DollarSign } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Co.Alt Lab
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Innovating at the intersection of technology and business solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              icon={Zap}
              title="10x Faster Results"
              description="Get comprehensive insights in hours instead of weeks. No more scheduling delays or participant no-shows."
              href="#faster-results"
            />
            <ProjectCard
              icon={BarChart}
              title="Unlimited Scale"
              description="Test with hundreds or thousands of synthetic users representing your exact target demographics."
              href="#unlimited-scale"
            />
            <ProjectCard
              icon={DollarSign}
              title="80% Cost Reduction"
              description="Dramatically reduce research costs while increasing the breadth and depth of insights."
              href="#cost-reduction"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
