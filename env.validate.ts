import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min, validateSync } from 'class-validator';
enum Environment {
  Development = 'development',
  Test = 'test',
  Local = 'local',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  DATABASE_STORAGE: string;
  DATABASE_DIALECT: string;
  DATABASE_AUTO_LOAD_MODELS: string;
  DATABASE_SYNCHRONIZE: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
