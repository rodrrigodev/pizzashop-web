import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrdersDetails } from './orders-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrdersDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        sjkhjdhsjdh
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell className="">
        <div className=" flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Rodrigo Santos</TableCell>

      <TableCell className="font-medium">R$ 149,66</TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-3 h-3 w-3" /> Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-3 h-3 w-3" /> Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
