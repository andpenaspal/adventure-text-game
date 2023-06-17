import { createSerializer } from '@emotion/jest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

afterEach(() => cleanup());
