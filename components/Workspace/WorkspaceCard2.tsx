'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProgressTasks from './ProgressTasks';
import { BoardType } from '@/lib/schema/board/board.schema';
import Image from 'next/image';
import banner from '@/public/testBanner.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const WorkspaceCard = ({ board }: { board: BoardType }) => {
  const statuses = [
    { value: 20, colorClass: 'bg-red-500', label: 'Status 1' },
    { value: 30, colorClass: 'bg-blue-500', label: 'Status 2' },
    { value: 20, colorClass: 'bg-gray-500', label: 'Status 2' },
    { value: 20, colorClass: 'bg-green-500', label: 'Status 3' },
    { value: 10, colorClass: 'bg-pink-500', label: 'Status 4' },
  ];
  return (
    <div>
      <Card className="w-[19.3rem] 2xl:w-[25rem] h-auto flex flex-col space-y-1 p-1 bg-white shadow-lg rounded-xl select-none">
        <CardHeader className="flex flex-col gap-3">
          {/* Banner */}
          <div className="relative w-full h-48 overflow-hidden rounded-md">
            <Image
              alt="banner"
              src={banner}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          {/* Title + Progress */}
          <div className="flex gap-1 flex-col">
            <CardTitle className="text-start font-semibold tracking-wide text-xl">
              {board?.name}
            </CardTitle>
            <span className="text-slate-500">UI/UX Design</span>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {/* Progress */}
          <div className="flex items-center gap-3">
            <ProgressTasks
              width="w-full"
              idLabel="example-progress"
              labelValue="Progress"
              statuses={statuses}
            />
          </div>
        </CardContent>

        <CardFooter className="flex -space-x-2 items-center justify-end">
          {/* Member */}
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WorkspaceCard;

