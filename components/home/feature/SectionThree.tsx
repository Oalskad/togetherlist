'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BadgeAlert, Bug, Presentation, User, Workflow } from 'lucide-react';

const StyledCardOne = styled(motion.div)`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  background-color: #ffe8d7;
  width: 25rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const StyledCardTwo = styled(motion.div)`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  background-color: #3a1b05;
  width: 25rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const SectionThree = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center items-center flex-col gap-3 py-3"
    >
      <h1 className="text-2xl font-bold tracking-wide">
        Work cross-functionally
      </h1>
      <span className="text-center max-w-5xl text-slate-500">
        Collaborate with teams across the board and effectively manage
        stakeholders across the organization. Streamline the revision and
        approval process and easily route requests for approval to internal and
        external stakeholders.
      </span>

      <div className="flex items-center justify-center gap-8">
        <StyledCardOne whileHover={{ y: -10, transition: { duration: 0.3 } }}>
          <h3 className="uppercase font-semibold text-[#3A1B05] px-4 py-2 text-l">
            Cross-Functional Collaboration
          </h3>

          <div className="flex items-center gap-5 text-slate-500 text-sm">
            <div className="bg-[#3A1B05] w-fit rounded-xl px-2 py-1">
              <User size={32} color="#FFE8D7" strokeWidth={1.75} />
            </div>
            <span>Team Communication & Collaboration</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500 text-sm">
            <div className="bg-[#3A1B05] w-fit rounded-xl px-2 py-1">
              <User size={32} color="#FFE8D7" strokeWidth={1.75} />
            </div>
            <span>Stakeholder Management</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500 text-sm">
            <div className="bg-[#3A1B05] w-fit rounded-xl px-2 py-1">
              <User size={32} color="#FFE8D7" strokeWidth={1.75} />
            </div>
            <span>Revision & Approval Process</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500 text-sm">
            <div className="bg-[#3A1B05] w-fit rounded-xl px-2 py-1">
              <User size={32} color="#FFE8D7" strokeWidth={1.75} />
            </div>
            <span>Routing Requests for Approval</span>
          </div>
        </StyledCardOne>

        <StyledCardTwo whileHover={{ y: -10, transition: { duration: 0.3 } }}>
          <h3 className="uppercase font-semibold text-[#FFE8D7] px-4 py-2 text-l">
            Together List Project Management
          </h3>

          <div className="flex items-center gap-5 text-white text-sm">
            <div className="bg-[#FFE8D7] w-fit rounded-xl px-2 py-1">
              <Presentation size={32} color="#3A1B05" strokeWidth={1.75} />
            </div>
            <span>Project Tracking & Management</span>
          </div>

          <div className="flex items-center gap-5 text-white text-sm">
            <div className="bg-[#FFE8D7] w-fit rounded-xl px-2 py-1">
              <Workflow size={32} color="#3A1B05" strokeWidth={1.75} />
            </div>
            <span>Agile Workflow Management</span>
          </div>

          <div className="flex items-center gap-5 text-white text-sm">
            <div className="bg-[#FFE8D7] w-fit rounded-xl px-2 py-1">
              <Bug size={32} color="#3A1B05" strokeWidth={1.75} />
            </div>
            <span>Issue & Bug Tracking</span>
          </div>

          <div className="flex items-center gap-5 text-white text-sm">
            <div className="bg-[#FFE8D7] w-fit rounded-xl px-2 py-1">
              <BadgeAlert size={32} color="#3A1B05" strokeWidth={1.75} />
            </div>
            <span>Reporting & Analysis</span>
          </div>
        </StyledCardTwo>
      </div>
    </motion.section>
  );
};

export default SectionThree;
