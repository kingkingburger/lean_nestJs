import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Workspaces } from './Workspaces';
import { Users } from './Users';

// @Index('WorkspaceId', ['Workspace'], {})
// @Index('dms_ibfk_2', ['Sender'], {})
// @Index('dms_ibfk_3', ['Receiver'], {})
@Entity({ schema: 'sleact', name: 'dms' })
export class DMs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @Column('int', { name: 'WorkspaceId', nullable: true })
  // WorkspaceId: number | null;
  //
  // @Column('int', { name: 'SenderId', nullable: true })
  // SenderId: number | null;
  //
  // @Column('int', { name: 'ReceiverId', nullable: true })
  // ReceiverId: number | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces | number;

  @ManyToOne(() => Users, (users) => users.DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  Sender: Users | number;

  @ManyToOne(() => Users, (users) => users.DMs2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  Receiver: Users | number;
}
