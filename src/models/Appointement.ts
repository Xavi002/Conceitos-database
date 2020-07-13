import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// Entidade => Algo que vai ser guardado numa db
// Column =>
// PrimaryGeneratedColumn => É utilizado no id pois é a chave primária da tabela e é gerado de forma automática

@Entity('appointments') // Entity decorator é como uma função que envia como parâmetro envia a class
class Appointement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // Utiliza varchar deafult
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointement;
