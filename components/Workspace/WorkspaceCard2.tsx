'use client';
import { CardContent, CardTitle, CardHeader, Card } from '@/components/ui/card';
import ProgressTasks from './ProgressTasks';
import { BoardType } from '@/lib/schema/board/board.schema';

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
      <Card className=" bg-white shadow-lg zoom-in-95max-w-laptop lg:max-w-monitor h-auto flex flex-col space-y-5 p-5 rounded-xl select-none">
        <CardHeader>
          {/* Title + Progress */}
          <div className="flex justify-between items-center ">
            <CardTitle className="text-start font-semibold tracking-wide text-3xl overflow-wrap break-word">
              {board?.name}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {/* Progress */}
          <div className="flex items-center gap-3">
            {/* <ProgressTasks
              width="w-[40%]"
              idLabel="Not Done"
              labelValue="Not Done"
              progressValue={50}
              progressColorClass="bg-red-500"
            />

            <ProgressTasks
              width="w-[40%]"
              idLabel="On Going"
              labelValue="On Going"
              progressValue={50}
              progressColorClass="bg-yellow-500"
            />

            <ProgressTasks
              width="w-[40%]"
              idLabel="Done"
              labelValue="Done"
              progressValue={50}
              progressColorClass="bg-green-500"
            /> */}
            <ProgressTasks
              width="w-full"
              idLabel="example-progress"
              labelValue="Progress"
              statuses={statuses}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkspaceCard;
