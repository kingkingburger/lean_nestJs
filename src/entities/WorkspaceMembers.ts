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

// @Index('User', ['User'], {})
@Entity({ schema: 'sleact' })
export class WorkspaceMembers {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @Column('int', { primary: true, name: 'WorkspaceId' })
  // WorkspaceId: number;
  //
  // @Column('int', { primary: true, name: 'UserId' })
  // UserId: number;

  @Column('date', { name: 'loggedInAt', nullable: true })
  loggedInAt: Date | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces | number;

  @ManyToOne(() => Users, (users) => users.WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users | number;
}
