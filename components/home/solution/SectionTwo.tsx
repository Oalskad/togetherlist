'use client';
import { Code, GanttChart, PackageSearch, Pencil } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledCard = styled(motion.div)`
  background-color: #e7f4ff;
  width: 18rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  user-select: none;
  cursor: default;
`;
const SectionTwo = () => {
  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Change to false if you want to trigger again when element is not in view
  });
  return (
    <section className="flex flex-col justify-start items-center py-5 gap-9">
      <h1 className="font-semibold text-4xl tracking-wide uppercase">
        By team functions
      </h1>
      <span className="text-slate-600 max-w-2xl ">
        Our enterprise solution offers robust project management and team
        collaboration features. It&apos;s designed to handle the needs of large
        organizations.
      </span>
      <div className="flex gap-5">
        <StyledCard
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          whileHover={{ y: -20 }}
        >
          <Pencil size={55} />
          <h2 className="font-bold text-xl tracking-wide">Design</h2>
          <span className=" text-slate-500 px-3 select-none">
            The Design card is all about creating visually appealing interfaces.
            It&apos;s perfect for designers who want to create stunning user
            experiences.
          </span>
        </StyledCard>

        <StyledCard
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          whileHover={{ y: -20 }}
        >
          <Code size={55} />
          <h2 className="font-bold text-xl tracking-wide">Engineering</h2>
          <span className=" text-slate-500 px-3 select-none">
            The Engineering card is for those who love to code. It&apos;s ideal
            for developers who want to build robust and efficient systems.
          </span>
        </StyledCard>

        <StyledCard
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          whileHover={{ y: -20 }}
        >
          <PackageSearch size={55} />
          <h2 className="font-bold text-xl tracking-wide">Product</h2>
          <span className=" text-slate-500 px-3 select-none">
            The Product card is for product managers who want to deliver
            products that meet user needs and business goals.
          </span>
        </StyledCard>

        <StyledCard
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          whileHover={{ y: -20 }}
        >
          <GanttChart size={55} />
          <h2 className="font-bold text-xl tracking-wide">Manager</h2>
          <span className=" text-slate-500 px-3 select-none">
            The Manager card is for team leaders who want to effectively manage
            resources and ensure project success.
          </span>
        </StyledCard>
      </div>
    </section>
  );
};

export default SectionTwo;
