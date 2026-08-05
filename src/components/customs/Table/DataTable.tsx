import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";


interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    data: T[];
}

function DataTable<T>({columns, data}: DataTableProps<T>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
       <div className={"rounded-lg border overflow-hidden"}>
           <Table>
               <TableHeader className={"bg-gray-200"}>
                   {table.getHeaderGroups().map((headerGroup) => (
                       <TableRow key={headerGroup.id}>
                           {headerGroup.headers.map((header) => (
                               <TableHead key={header.id}>
                                   {header.isPlaceholder
                                       ? null
                                       : flexRender(
                                           header.column.columnDef.header,
                                           header.getContext()
                                       )}
                               </TableHead>
                           ))}
                       </TableRow>
                   ))}
               </TableHeader>

               <TableBody>
                   {table.getRowModel().rows.length ? (
                       table.getRowModel().rows.map((row) => (
                           <TableRow key={row.id}>
                               {row.getVisibleCells().map((cell) => (
                                   <TableCell key={cell.id}>
                                       {flexRender(
                                           cell.column.columnDef.cell,
                                           cell.getContext()
                                       )}
                                   </TableCell>
                               ))}
                           </TableRow>
                       ))
                   ) : (
                       <TableRow>
                           <TableCell
                               colSpan={columns.length}
                               className="text-center h-24"
                           >
                               Không có dữ liệu
                           </TableCell>
                       </TableRow>
                   )}
               </TableBody>
           </Table>
       </div>
    )

}

export default DataTable;